package com.vr.dao;

import java.util.List;

import com.vr.domain.MobileBox;


public interface MobileBoxDao {
	public boolean createMobileBox(MobileBox mobileBox);

	public boolean deleteMobileBox(MobileBox mobileBox);

	public boolean updateMobileBox(MobileBox mobileBox);

	public List<Object> getMobileBoxByPage(int pageNo);

	public MobileBox getMobileBoxById(int id);
}
