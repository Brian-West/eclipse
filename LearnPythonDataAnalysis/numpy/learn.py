# -*- coding: utf-8 -*-
import numpy as np

lst = [[1, 2, 3], [2, 3, 4]]
np_lst = np.array(lst)
np_lst = np.array(lst, np.float)
print type(lst)
print type(np_lst)
print np_lst.shape
print np_lst.ndim  # 维度
print np_lst.dtype
print np_lst.itemsize  # 字节数
print np_lst.size  # 元素个数

# 常用数组
print np.zeros([2, 4])
print np.ones([3, 4])

print np.random.rand(2, 4)
print np.random.rand()
print np.random.randint(1, 10, 3)
print np.random.randn(2, 1)  # 正态分布
print np.random.choice([10, 20, 30])
print np.random.beta(1, 10, 100)
