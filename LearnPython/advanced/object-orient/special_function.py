# -*- coding: utf-8 -*-
from operator import __mul__
class Person(object):

    def __init__(self, name, gender):
        self.name = name
        self.gender = gender

class Student(Person):

    def __init__(self, name, gender, score):
        super(Student, self).__init__(name, gender)
        self.score = score

    def __str__(self):
        return '(Student: %s, %s, %d)' % (self.name, self.gender, self.score)
        
    __repr__ = __str__  # __str__()用于显示给用户，而__repr__()用于显示给开发人员。

s = Student('Bob', 'male', 88)
print s

class Student(object):

    def __init__(self, name, score):
        self.name = name
        self.score = score

    def __str__(self):
        return '(%s: %s)' % (self.name, self.score)

    __repr__ = __str__

    def __cmp__(self, s):
        if self.score < s.score:
            return 1
        elif self.score > s.score:
            return -1
        else:
            if self.name < s.name:
                return -1
            elif self.name > s.name:
                return 1
            else:
                return 0

L = [Student('Tim', 99), Student('Bob', 88), Student('Alice', 99)]
print sorted(L)

class Fib(object):

    def __init__(self, num):
        self.num = num

    def __str__(self):
        if self.num == 1:
            return [0]
        elif self.num == 2:
            return [0, 1]
        L = [0, 1]
        for x in range(0, self.num - 2):
            L.append(L[-1] + L[-2])
        return str(L)
    def __len__(self):
        return self.num

f = Fib(10)
print f.__str__()  # str函数不需要返回字符串，可返回list
print f
print len(f)

# 有理数数学运算

# 最大公因数
def gcd(m, n):
    if n == 0:
        return m
    return gcd(n, m % n)
    
print gcd(60, 24)

class Rational(object):
    def __init__(self, p, q):
        self.p = p / gcd(p, q)
        self.q = q / gcd(p, q)

    def __add__(self, r):
        return Rational(self.p * r.q + self.q * r.p, self.q * r.q)

    def __sub__(self, r):
        return Rational(self.p * r.q - self.q * r.p, self.q * r.q)

    def __mul__(self, r):
        return Rational(self.p * r.p, self.q * r.q)

    def __div__(self, r):
        return Rational(self.p * r.q, self.q * r.p) 

    def __str__(self):
        return '%s/%s' % (self.p, self.q)

    __repr__ = __str__

r1 = Rational(1, 2)
r2 = Rational(1, 4)
print r1 + r2
print r1 - r2
print r1 * r2
print r1 / r2

class Rational(object):
    def __init__(self, p, q):
        self.p = p
        self.q = q

    def __int__(self):
        return self.p / self.q

    def __float__(self):
        return 1.0 * self.p / self.q

print float(Rational(7, 2))
print float(Rational(1, 3))
print int(Rational(7, 2))

# 用装饰器函数把 get/set 方法“装饰”成属性调用：
class Student(object):

    def __init__(self, name, score):
        self.name = name
        self.__score = score

    @property
    def score(self):
        return self.__score

    @score.setter
    def score(self, score):
        if score < 0 or score > 100:
            raise ValueError('invalid score')
        self.__score = score

    @property
    def grade(self):
        if self.score >= 80:
            return 'A'
        elif self.score >= 60:
            return 'B'
        else:
            return 'C'

s = Student('Bob', 59)
print s.grade

s.score = 60
print s.grade

s.score = 99
print s.grade

# s.score = 1000

# __slots__的目的是限制当前类所能拥有的属性
class Person(object):

    __slots__ = ('name', 'gender')

    def __init__(self, name, gender):
        self.name = name
        self.gender = gender

class Student(Person):

    __slots__ = ('score')

    def __init__(self, name, gender, score):
        super(Student, self).__init__(name, gender)
        self.score = score

s = Student('Bob', 'male', 59)
s.name = 'Tim'
s.score = 99
print s.score
# s.var = 10

# 在Python中，函数也是对象，对象和函数的区别并不显著。
# 所有的函数都是可调用对象。一个类实例也可以变成一个可调用对象
class Person(object):
    def __init__(self, name, gender):
        self.name = name
        self.gender = gender

    def __call__(self, friend):
        print 'My name is %s...' % self.name
        print 'My friend is %s...' % friend
        
p = Person('Bob', 'male')
p('Tim')

class Fib(object):
    def __call__(self, num):
        if num == 1:
            return [0]
        elif num == 2:
            return [0, 1]
        L = [0, 1]
        for x in range(0, num - 2):
            L.append(L[-1] + L[-2])
        return str(L)

f = Fib()
print f(10)
