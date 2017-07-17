# -*- coding: utf-8 -*-
# 高阶函数就是可以接受函数参数的函数
import math

def add(x, y, f):
    return f(x) + f(y)

print add(25, 9, math.sqrt)

def format_name(s):
    newS = ''
    newS += s[0:1].upper() 
    newS += s[1:len(s)].lower()
    return newS

print map(format_name, ['adam', 'LISA', 'barT'])  # List的每一个元素作为定义域，返回值域的List

def prod(x, y):
    return x * y

print reduce(prod, [2, 4, 5, 7, 12])  # 2*4*5*7*12

def is_not_empty(s):
    return s and len(s.strip()) > 0
print filter(is_not_empty, ['test', None, '', 'str', '  ', 'END'])  # Python把0、空字符串''和None看成 False，其他数值和非空字符串都看成 True

def test(s):
    return s and len(s.strip()) > 0
print test(' ')

# 请利用filter()过滤出1~100中平方根是整数的数
def is_sqr(x):
    return math.sqrt(x) % 1 == 0

print filter(is_sqr, range(1, 101))

# 自定义排序规则
def reversed_cmp(x, y):
    if x > y:
        return -1
    if x < y:
        return 1
    return 0
print sorted([36, 5, 12, 9, 21], reversed_cmp)

def cmp_ignore_case(s1, s2):
    return cmp(s1.lower(), s2.lower())
#     if s1.upper()<s2.upper():
#         return -1
#     if s1.upper()>s2.upper():
#         return 1
#     return 0

print sorted(['bob', 'about', 'Zoo', 'Credit'], cmp_ignore_case)

# 返回函数，可以延迟调用
def f():
    print 'call f()...'
    # 定义函数g:
    def g():
        print 'call g()...'
    # 返回函数g:
    return g
x = f()
print x
x()

def calc_sum(lst):
    def lazy_sum():
        return sum(lst)
    return lazy_sum

f = calc_sum([1, 2, 3, 4, ])
print f()

def calc_prod(lst):
    def lazy_prod():
        p = 1
        for x in lst:
            p *= x
        return p
    return lazy_prod

f = calc_prod([1, 2, 3, 4])
print f()

# 希望一次返回3个函数，分别计算1x1,2x2,3x3:
# 返回函数不要引用任何循环变量，或者后续会发生变化的变量。
def count():
    fs = []
    for i in range(1, 4):
        def f(m=i):
            return m * m
        fs.append(f)
    return fs

f1, f2, f3 = count()
print f1(), f2(), f3()

# 匿名函数
print map(lambda x: x * x, [1, 2, 3, 4, 5, 6, 7, 8, 9])
print sorted([1, 3, 9, 5, 0], lambda x, y:-cmp(x, y))
myabs = lambda x:-x if x < 0 else x 
print myabs(-1)
print myabs(2)

print filter(lambda s:s and len(s.strip()) > 0, ['test', None, '', 'str', '  ', 'END'])

# 装饰器
# 无参装饰器
def log(f):
    def fn(*args, **kw):
        print 'call ' + f.__name__ + '()...'
        return f(*args, **kw)
    return fn

@log
def factorial(n):
    return reduce(lambda x, y: x * y, range(1, n + 1))
print factorial(10)

@log
def adds(x, y):
    return x + y
print adds(1, 2)

import time

def performance(f):
    def fn(*args):
        print 'call factorial_2() in', time.clock()
        return f(*args)
    return fn

@performance
def factorial_2(n):
    return reduce(lambda x, y: x * y, range(1, n + 1))

print factorial_2(10)

# 有参装饰器

def log_2(prefix):
    def log_decorator(f):
        def wrapper(*args, **kw):
            print '[%s] %s()...' % (prefix, f.__name__)
            return f(*args, **kw)
        return wrapper
    return log_decorator

@log_2('DEBUG')
def test_2():
    pass
print test_2()

import functools
def performance_2(unit):
    def per_decorator(f):
        @functools.wraps(f)  # 把原函数的属性全复制到新函数wrapper_2上
        def wrapper_2(*args, **kw):
            sec = time.time() if unit == 's' else 1000 * time.time()
            print 'call ' + f.__name__ + '() in ' + str(sec) + unit
            return f(*args, **kw)
        return wrapper_2
    return per_decorator

@performance_2('s')
def factorial_3(n):
    return reduce(lambda x, y: x * y, range(1, n + 1))

print factorial_3(10)
print factorial_3.__name__

# 偏函数
print int('12345')  # 当仅传入字符串时，int()函数默认按十进制转换

sorted_ignore_case = functools.partial(sorted, cmp=cmp_ignore_case)

print sorted_ignore_case(['bob', 'about', 'Zoo', 'Credit'])
