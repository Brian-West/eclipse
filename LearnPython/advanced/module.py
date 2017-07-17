# -*- coding: utf-8 -*-

from __future__ import division, unicode_literals
import os
print os.path.isdir(r'/usr')
print os.path.isdir(r'/etc/')
print os.path.isfile(r'/home/brian/nohup.out')

# try:
#     from cStringIO import StringIO
# except ImportError:
#     from StringIO import StringIO
    
# try:
#     import json
# except importError:2.5中没有json,只有simplejson
#     import simplejson
# 
# print json.dumps({'python':2.5})

print 10 / 3
print 10 // 3  # pyhon 3中的整除

s = 'am I an unicode? 中文怎么了' 
print isinstance(s, unicode)

import web
web.browser
