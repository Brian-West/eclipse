package com.vr.service;

import java.util.HashMap;
import java.util.List;

import com.vr.domain.AllInOnePC;

public interface AllInOnePCService {
    public boolean createAllInOnePC(AllInOnePC allInOnePC);
    public boolean deleteAllInOnePC(AllInOnePC allInOnePC);
    public boolean updateAllInOnePC(AllInOnePC allInOnePC);
    public boolean modifyAllInOnePCInfo(HashMap<String,Object> info,AllInOnePC allInOnePC);
    public List<AllInOnePC> getAllInOnePCByPage(int pageNo);
    public AllInOnePC getAllInOnePCById(int id);
}
