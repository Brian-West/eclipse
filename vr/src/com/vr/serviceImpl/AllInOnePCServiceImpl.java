package com.vr.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import org.springframework.stereotype.Service;

import com.vr.dao.AllInOnePCDao;
import com.vr.dao.PCHeadSetDao;
import com.vr.domain.AllInOnePC;
import com.vr.domain.MobileBox;
import com.vr.service.AllInOnePCService;

@Service
@Qualifier("allInOnePCServiceImpl")
public class AllInOnePCServiceImpl implements AllInOnePCService{

	@Autowired
	@Qualifier("allInOnePCDaoImpl")
	private AllInOnePCDao dao;
	
	@Override
	public boolean createAllInOnePC(AllInOnePC allInOnePC) {
		return dao.createAllInOnePC(allInOnePC);
	}

	@Override
	public boolean deleteAllInOnePC(AllInOnePC allInOnePC) {
		return dao.deleteAllInOnePC(allInOnePC);
	}

	@Override
	public boolean updateAllInOnePC(AllInOnePC allInOnePC) {
		return dao.deleteAllInOnePC(allInOnePC);
	}

	@Override
	public boolean modifyAllInOnePCInfo(HashMap<String, Object> info, AllInOnePC allInOnePC) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<AllInOnePC> getAllInOnePCByPage(int pageNo) {
		List<Object> l=dao.getAllInOnePCByPage(pageNo);
		List<AllInOnePC> list=new ArrayList<AllInOnePC>();
		for(Object o:l){
			list.add((AllInOnePC)o);
		}
		return list;
	}

	@Override
	public AllInOnePC getAllInOnePCById(int id) {
		return dao.getAllInOnePCById(id);
	}

}
