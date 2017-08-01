package com.vr.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.MobileBoxDao;
import com.vr.domain.MobileBox;
import com.vr.util.HibernateUtils;

@Repository
@Qualifier("mobileBoxDaoImpl")
public class MobileBoxDaoImpl extends HibernateUtils<MobileBox> implements MobileBoxDao{

	@Override
	public boolean createMobileBox(MobileBox mobileBox) {
		return save(mobileBox);
	}

	@Override
	public boolean deleteMobileBox(MobileBox mobileBox) {
		return delete(mobileBox);
	}

	@Override
	public boolean updateMobileBox(MobileBox mobileBox) {
		return update(mobileBox);
	}

	@Override
	public List<Object> getMobileBoxByPage(int pageNo) {
		String hql = "from MobileBox m";
		return listpage(hql, pageNo, 10);
	}

	@Override
	public MobileBox getMobileBoxById(int id) {
		String hql="from MobileBox m where m.id=?";
		return (MobileBox) findByHql(hql,new Object[]{id});
	}
      
}
