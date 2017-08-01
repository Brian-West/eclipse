package com.vr.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.PCHeadSetDao;
import com.vr.domain.MobileBox;
import com.vr.domain.PCHeadSet;
import com.vr.util.HibernateUtils;

@Repository
@Qualifier("pcHeadSetDaoImpl")
public class PCHeadSetDaoImpl extends HibernateUtils<PCHeadSet> implements PCHeadSetDao{

	@Override
	public boolean createPCHeadSet(PCHeadSet pcHeadSet) {
		return save(pcHeadSet);
	}

	@Override
	public boolean deletePCHeadSet(PCHeadSet pcHeadSet) {
		return delete(pcHeadSet);
	}

	@Override
	public boolean updatePCHeadSet(PCHeadSet pcHeadSet) {
		return update(pcHeadSet);
	}

	@Override
	public List<Object> getPCHeadSetByPage(int pageNo) {
		String hql = "from PCHeadSet p";
		return listpage(hql, pageNo, 10);
	}

	@Override
	public PCHeadSet getPCHeadSetById(int id) {
		String hql="from PCHeadSet p where p.id=?";
		return (PCHeadSet) findByHql(hql,new Object[]{id});
	}

}
