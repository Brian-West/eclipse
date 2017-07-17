package com.vr.dao;

import java.util.List;

import com.vr.domain.PCHeadSet;

public interface PCHeadSetDao {
	public boolean createPCHeadSet(PCHeadSet pcHeadSet);

	public boolean deletePCHeadSet(PCHeadSet pcHeadSet);

	public boolean updatePCHeadSet(PCHeadSet pcHeadSet);

	public List<Object> getPCHeadSetByPage(int pageNo);

	public PCHeadSet getPCHeadSetById(int id);
}
