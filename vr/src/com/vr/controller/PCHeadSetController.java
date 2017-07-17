package com.vr.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vr.domain.MobileBox;
import com.vr.domain.PCHeadSet;
import com.vr.service.PCHeadSetService;
import com.vr.util.request.CompareUtil;
import com.vr.util.response.Code;
import com.vr.util.response.Data;
import com.vr.util.response.ResponseData;
import com.vr.util.response.ResponseDataPayload;

@Controller
public class PCHeadSetController {
	@Autowired
	@Qualifier("pcHeadSetServiceImpl")
	private PCHeadSetService pcHeadSetService;

	public PCHeadSetService getPcHeadSetService() {
		return pcHeadSetService;
	}

	public void setPcHeadSetService(PCHeadSetService pcHeadSetService) {
		this.pcHeadSetService = pcHeadSetService;
	}
	
	@ResponseBody
	@RequestMapping("/svrCompare")
	public Data compare(@RequestBody CompareUtil cmpUtil) {
		List<PCHeadSet> l = null;
		if (cmpUtil.getIdList().size() > 4 || cmpUtil.getIdList().isEmpty()) {
			return new Data(new ResponseDataPayload(Code.SUCCEED,l));
		} else {
			l = new ArrayList<PCHeadSet>();
			for (Integer i : cmpUtil.getIdList()) {
				l.add(pcHeadSetService.getPCHeadSetById(i));
			}
			int size=cmpUtil.getIdList().size();
			for(int i=size;i<4;i++){
				l.add(new PCHeadSet());
			}
			return new Data(new ResponseDataPayload(Code.SUCCEED,l));
		}
	}

	@ResponseBody
	@RequestMapping("/svr/{id}")
	public ResponseDataPayload getPCHeadSetById(@PathVariable Integer id) {
		return new ResponseDataPayload(Code.SUCCEED,pcHeadSetService.getPCHeadSetById(id));
	}

	@ResponseBody
	@RequestMapping("/products/svr/{pageid}")
	public Data getPCHeadSetByPage(@PathVariable Integer pageid) {
		return new Data(new ResponseDataPayload(Code.SUCCEED,pcHeadSetService.getPCHeadSetByPage(pageid)));
	}
}