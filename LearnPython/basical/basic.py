# -*- coding: utf-8 -*-
L = ['Adam', 95.5, 'Lisa', 85, 'Bart', 59]
print L
print L[0]
print L[-1]  # 倒数第一

L = ['Adam', 'Lisa', 'Bart']
L.insert(2, 'Paul')
L.append('Me')
print L

print L.pop(2)
print L.pop()

# 以上是list类型
# 以下是tuple类型

t = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
print t
t = ('Adam',)
print t
t = (1,)
print t
t = (1, 2, 3,)
i = 0
while i < len(t): 
    print t[i]
    i += 1
print len(t)
print t;
t = ('a', 'b', ('A', 'B'))
print t
t = ('a', 'b', ['A', 'B'])  # 这个t可变
print t;

# 以下是dict类型
d = {
    'Adam':95,
    'Lisa':85,
    'Bart':59,
    }
d = {
    95:'Adam',
    85:'Lisa',
    59:'Bart'
    }
for key in d:
    print d[key], ':', key
# d[72]='Paul'
# d['w']=32
print d
{
    '123': [1, 2, 3],  # key 是 str，value是list
    123: '123',  # key 是 int，value 是 str
    ('a', 'b'): True  # key 是 tuple，并且tuple的每个元素都是不可变对象，value是 boolean
}
# print 'Adam:',d.get('Adam')
# print 'Lisa:',d.get('Lisa')
# print 'Bart:',d.get('Bart')

# 以下是set类型
s = set(['Adam', 'Lisa', 'Bart', 'Paul', 'Paul'])
print s
s = set(['adam', 'bart'])
print 'adam' in s
print 'bart' in s

months = set(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'])
x1 = 'Feb'
x2 = 'Sun'

if x1 in months:
    print 'x1: ok'
else:
    print 'x1: error'

if x2 in months:
    print 'x2: ok'
else:
    print 'x2: error'
    
s = set([('Adam', 95), ('Lisa', 85), ('Bart', 59)])
for x in s:
    print x[0], ':', x[1]
    
s = set(['Adam', 'Lisa', 'Paul'])
L = ['Adam', 'Lisa', 'Bart', 'Paul']
for x in L:
    if x in s:
        s.remove(x)
    else:
        s.add(x)
print s
