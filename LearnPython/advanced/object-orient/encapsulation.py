# -*- coding: utf-8 -*-
class Person():
    pass

xiaoming = Person()
xiaohong = Person()

print xiaoming
print xiaohong
print xiaoming == xiaohong  # 结果为False

p1 = Person()
p1.name = 'Bart'

p2 = Person()
p2.name = 'Adam'

p3 = Person()
p3.name = 'Lisa'

L1 = [p1, p2, p3]
L2 = sorted(L1, lambda x, y:cmp(x.name, y.name))

print L2[0].name
print L2[1].name
print L2[2].name

class Person(object):
    def __init__(self, name, gender, birth, **kw):
        self.name = name
        self.gender = gender
        self.birth = birth
        for k, v in kw.iteritems():
            setattr(self, k, v)

xiaoming = Person('Xiao Ming', 'Male', '1990-1-1', job='Student')

print xiaoming.name
print xiaoming.job

class Person(object):
    def __init__(self, name, score):
        self.name = name
        self.__score = score  # __开头的属性不能被外界访问；__xxx__为特殊属性，可以被外界访问

p = Person('Bob', 59)

print p.name
try:
    print p.__score
except AttributeError:
    print ('attributeError')
    
class Person(object):
    count = 0  # 类属性
    def __init__(self, name):
        Person.count += 1
        self.name = name

p1 = Person('Bob')
print Person.count

p2 = Person('Alice')
print Person.count

p3 = Person('Tim')
print Person.count

# 千万不要在实例上修改类属性，它实际上并没有修改类属性，而是给实例绑定了一个实例属性。
class Person(object):
    __count = 0
    def __init__(self, name):
        self.name = name
        Person.__count += 1
        print Person.__count

p1 = Person('Bob')
p2 = Person('Alice')

try:
    print Person.__count
except AttributeError:
    print 'attributeerror'
# print p1.__count
# print p2.__count

class Person(object):

    def __init__(self, name, score): 
        self.name = name
        self.__score = score

    def get_grade(self):
        if self.__score >= 90:
            return 'A'
        elif self.__score >= 60:
            return 'B'
        else:
            return 'C'

p1 = Person('Bob', 90)
p2 = Person('Alice', 65)
p3 = Person('Tim', 48)

print p1.get_grade()
print p2.get_grade()
print p3.get_grade()
print p1.get_grade

class Person(object):

    def __init__(self, name, score):
        self.name = name
        self.score = score
        self.get_grade = lambda: 'A'

p1 = Person('Bob', 90)
print p1.get_grade  # 是函数而不是方法
print p1.get_grade()

class Person(object):

    __count = 0

    def __init__(self, name):
        self.name = name
        Person.__count += 1
    @classmethod
    def how_many(cls):
        return cls.__count

print Person.how_many()

p1 = Person('Bob')

print Person.how_many()
