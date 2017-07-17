package com.vr.service;

import java.util.HashMap;
import java.util.List;

import com.vr.domain.PCHeadSet;

public interface PCHeadSetService {
    public boolean createPCHeadSet(PCHeadSet pcHeadSet);
    public boolean deletePCHeadSet(PCHeadSet pcHeadSet);
    public boolean updatePCHeadSet(PCHeadSet pcHeadSet);
    public boolean modifyPCHeadSetInfo(HashMap<String,Object> info,PCHeadSet pcHeadSet);
    public List<PCHeadSet> getPCHeadSetByPage(int pageNo);
    public PCHeadSet getPCHeadSetById(int id);
}
