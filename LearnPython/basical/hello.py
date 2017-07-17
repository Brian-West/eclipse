# -*- coding: utf-8 -*-
# 对中文的支持
# print 'hello world';
# print 100+222 ;
# print '222';
# print '"2222"'
# print "'3333'"
# print '\"aaa\"'
# print '''aaa 
# aaa'''
# print r'\n\n'
print u'''静夜思
床前明月光，
疑是地上霜。
举头望明月，
低头思故乡。'''
# Python把0、空字符串''和None看成 False，其他数值和非空字符串都看成 True
a = 'python'
print 'hello,', a or 'world' 

b = ""
print 'hello,', b or 'world'

print True and 10 < 12
