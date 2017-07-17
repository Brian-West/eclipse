package com.vr.serviceImpl;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.PCHeadSetDao;
import com.vr.domain.PCHeadSet;
import com.vr.service.PCHeadSetService;
@Service
@Qualifier("pcHeadSetServiceImpl")
public class PCHeadSetServiceImpl implements PCHeadSetService{

	@Autowired
	@Qualifier("pcHeadSetDaoImpl")
	private PCHeadSetDao dao;
	
	@Override
	public boolean createPCHeadSet(PCHeadSet pcHeadSet) {
		return dao.createPCHeadSet(pcHeadSet);
	}

	@Override
	public boolean deletePCHeadSet(PCHeadSet pcHeadSet) {
		return dao.deletePCHeadSet(pcHeadSet);
	}

	@Override
	public boolean updatePCHeadSet(PCHeadSet pcHeadSet) {
		return dao.updatePCHeadSet(pcHeadSet);
	}

	@Override
	public boolean modifyPCHeadSetInfo(HashMap<String, Object> info, PCHeadSet pcHeadSet) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<PCHeadSet> getPCHeadSetByPage(int pageNo) {
		List<Object> l=dao.getPCHeadSetByPage(pageNo);
		List<PCHeadSet> list=new ArrayList<PCHeadSet>();
		for(Object o:l){
			list.add((PCHeadSet)o);
		}
		return list;
	}

	@Override
	public PCHeadSet getPCHeadSetById(int id) {
		return dao.getPCHeadSetById(id);
	}

}
