# -*- coding: utf-8 -*-
print abs(23)
print abs(-24)

# print abs('aa') TypeError: bad operand type for abs(): 'str'
# print abs(2,2)  TypeError: abs() takes exactly one argument (2 given)

print cmp(1, 2)

print int(3.2)

# print str(3)+2   TypeError: cannot concatenate 'str' and 'int' objects

L = [x * x for x in range(1, 101)]
print sum(L)

def square_of_sum(L):
    s = 0
    for x in L:
        s += x ** 2
    return s
print square_of_sum([1, 2, 3])

import math
def move(x, y, step, angle):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny
x, y = move(100, 100, 60, math.pi / 6)
print x, y
print move(100, 100, 60, math.pi / 6)  # 返回的是tuple

def quadratic_equation(a, b, c):
    delta = b ** 2 - 4 * a * c
    if delta < 0:
        return
    elif delta == 0:
        return -b / (2 * a) 
    else:
        return (-b + math.sqrt(delta)) / (2 * a), (-b - math.sqrt(delta)) / (2 * a)
print quadratic_equation(2, 3, 0)
print quadratic_equation(1, -6, 5)

def Haniomove(n, a, b, c):
    if(n == 1):
        print a, '-->', c
    else:
        Haniomove(n - 1, a, c, b)
        print a, '-->', c
        Haniomove(n - 1, b, a, c)
Haniomove(2, 'A', 'B', 'C')

def greet(x='World'):
    print 'Hello,', x
greet()

def average(*args):
    if len(args) == 0:
        return 0
    s = 0.0
    for x in args:
        s += x
    return s / len(args)
print average(1, 2, 3)
