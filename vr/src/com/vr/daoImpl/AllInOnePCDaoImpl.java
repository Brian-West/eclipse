package com.vr.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.AllInOnePCDao;
import com.vr.domain.AllInOnePC;
import com.vr.util.HibernateUtils;

@Repository
@Qualifier("allInOnePCDaoImpl")
public class AllInOnePCDaoImpl extends HibernateUtils<AllInOnePC> implements AllInOnePCDao{

	@Override
	public boolean createAllInOnePC(AllInOnePC allInOnePC) {
		return save(allInOnePC);
	}

	@Override
	public boolean deleteAllInOnePC(AllInOnePC allInOnePC) {
		return delete(allInOnePC);
	}

	@Override
	public boolean updateAllInOnePC(AllInOnePC allInOnePC) {
		return update(allInOnePC);
	}

	@Override
	public List<Object> getAllInOnePCByPage(int pageNo) {
		String hql = "from AllInOnePC a";
		return listpage(hql, pageNo, 10);
	}

	@Override
	public AllInOnePC getAllInOnePCById(int id) {
		String hql="from AllInOnePC a where a.id=?";
		return (AllInOnePC) findByHql(hql,new Object[]{id});
	}

}
