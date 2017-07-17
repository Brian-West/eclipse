package com.vr.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ConvertUtil {
public static String DatetoString(Date date,String format)
{
	SimpleDateFormat sdf=new SimpleDateFormat(format);
	return sdf.format(date);
}
public static Date StringtoDate(String time,String format) throws ParseException
{
	SimpleDateFormat sdf=new SimpleDateFormat(format);
	return sdf.parse(format);
}
}
