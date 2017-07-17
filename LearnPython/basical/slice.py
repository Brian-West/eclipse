L = range(1, 101)
print L[0:10]
print L[:10]
print L[2:101:3]
print L[4:50:5]
print L[-10:]
print L[-46::5]
print L[4::5][-10:]

def firstCharUpper(s):
    return s[0:1].upper() + s[1:] 

print firstCharUpper('hello')
print firstCharUpper('sunday')
print firstCharUpper('september')
