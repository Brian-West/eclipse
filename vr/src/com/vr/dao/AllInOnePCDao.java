package com.vr.dao;

import java.util.List;

import com.vr.domain.AllInOnePC;

public interface AllInOnePCDao {
    public boolean createAllInOnePC(AllInOnePC allInOnePC);
    public boolean deleteAllInOnePC(AllInOnePC allInOnePC);
    public boolean updateAllInOnePC(AllInOnePC allInOnePC);
    public List<Object> getAllInOnePCByPage(int pageNo);
    public AllInOnePC getAllInOnePCById(int id);
}
