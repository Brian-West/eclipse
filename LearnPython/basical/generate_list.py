print [x * (x + 1) for x in range(1, 100, 2)]

d = { 'Adam': 95, 'Lisa': 85, 'Bart': 59 }
def generate_tr(name, score):
    if score < 60:
        return '<tr><td>%s</td><td style="color:red">%s</td></tr>' % (name, score)
    return '<tr><td>%s</td><td>%s</td></tr>' % (name, score)

tds = [generate_tr(name, score) for name, score in d.iteritems()]
print '<table border="1">'
print '<tr><th>Name</th><th>Score</th><tr>'
print '\n'.join(tds)
print '</table>'

def toUppers(L):
    newL = []
    [newL.append(x.upper()) for x in L if isinstance(x, str)]
    return newL
print toUppers([1, 'q', 'W'])

print [x * 100 + y * 10 + z for x in range(1, 10) for y in range(0, 10) for z in range(0, 10) if x == z] 
        
