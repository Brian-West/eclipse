package com.vr.util.response;

public class ResponseDataPayload {
     private int code;
     private Object payload;
     
	public ResponseDataPayload(int code, Object payload) {
		super();
		this.code = code;
		this.payload = payload;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public Object getPayload() {
		return payload;
	}
	public void setPayload(Object payload) {
		this.payload = payload;
	}
     
}
