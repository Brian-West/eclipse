age = 20
if age >= 18:
    print 'your age is', age
    print 'adult'
print 'END'

score = 55
if score >= 60:
    print 'passed'
else:
    print 'failed'
    
if not score >= 60:
    print 'failed'
    
score = 85
if score >= 90:
    print 'excellent'
elif score >= 80:
    print 'good'
elif score >= 60: 
    print 'passed'
else:
    print 'failed'
    
L = [75, 92, 59, 68]
sum1 = 0.0
for score in L:
    sum1 += score
print sum1 / 4

sum1 = 0
x = 1
while x <= 100:
    if x % 2 != 0:
        sum1 += x
    x += 1
print sum1

sum1 = 0
x = 1
n = 1
while True:
    sum1 += x
    x *= 2
    n += 1
    if n > 20:
        break
print sum1

sum1 = 0
x = 0
while True:
    x = x + 1
    if x > 100:
        break
    if x % 2 == 0:
        continue
    sum1 += x
print sum1

for x in [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]:
    for y in [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ]:
        if x < y:
            print x, y
