# -*- coding: utf-8 -*-
class Person(object):
    def __init__(self, name, gender):
        self.name = name
        self.gender = gender

class Teacher(Person):

    def __init__(self, name, gender, course):
        super(Teacher, self).__init__(name, gender)
        self.course = course

t = Teacher('Alice', 'Female', 'English')
print t.name
print t.course

class Person(object):

    def __init__(self, name, gender):
        self.name = name
        self.gender = gender

class Student(Person):

    def __init__(self, name, gender, score):
        super(Student, self).__init__(name, gender)
        self.score = score

class Teacher(Person):

    def __init__(self, name, gender, course):
        super(Teacher, self).__init__(name, gender)
        self.course = course

t = Teacher('Alice', 'Female', 'English')

print isinstance(t, Person)
print isinstance(t, Student)
print isinstance(t, Teacher)
print isinstance(t, object)

# 多态。动态语言调用实例方法，不检查类型，只要方法存在，参数正确，就可以调用。
import json

class Students(object):
    def read(self):
        return r'["Tim", "Bob", "Alice"]'
    
s = Students()
print json.load(s)

class Person(object):
    pass

class Student(Person):
    pass

class Teacher(Person):
    pass

class SkillMixin(object):
    pass

class BasketballMixin(SkillMixin):
    def skill(self):
        return 'basketball'

class FootballMixin(SkillMixin):
    def skill(self):
        return 'football'

class BStudent(Student, BasketballMixin):
    pass

class FTeacher(Teacher, FootballMixin):
    pass

s = BStudent()
print s.skill()

t = FTeacher()
print t.skill() 

class Person(object):

    def __init__(self, name, gender, **kw):
        for k, v in kw.iteritems():
            setattr(self, k, v)

p = Person('Bob', 'Male', age=18, course='Python')
print p.age
print p.course

print type(123)
print type(p)

print dir(123)
print dir(p)

def foo(x):
    if x[0:2] == '__' and x[-2:] == '__':
        return False
    else:
        return True
    
print filter(foo, dir(p))
