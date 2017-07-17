for i in range(1, 101):
    if i % 7 == 0:
        print i
        
L = ['Adam', 'Lisa', 'Bart', 'Paul']
newL = zip(range(1, 5), L)
for index, name in newL:
    print index, '-', name
    
d = { 'Adam': 95, 'Lisa': 85, 'Bart': 59, 'Paul': 74 }
sum1 = 0.0
for score in d.itervalues():
    sum1 += score 
print sum1 / len(d.values())

d = { 'Adam': 95, 'Lisa': 85, 'Bart': 59, 'Paul': 74 }
sum1 = 0.0
for k, v in d.iteritems():
    sum1 = sum1 + v
    print k, ':', v
print 'average', ':', sum1 / len(d.items())
