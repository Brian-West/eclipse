package com.vr.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mobilebox")
public class MobileBox {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "name")
    private String name;
	@Column(name = "pic_location")
    private String pic_location;
	@Column(name="sound_pressure")
	private Integer sound_pressure;
	@Column(name = "weight")
	private Integer weight;

	@Column(name = "cpu")
	private Integer cpu;

	@Column(name = "heat")
	private Integer heat;

	@Column(name = "irradiance")
	private Integer irradiance;

	@Column(name = "angle_of_field")
	private Integer angle_of_field;

	@Column(name = "trace_mode")
	private Integer trace_mode;

	@Column(name = "trace_range")
	private Integer trace_range;

	@Column(name = "avg_sight_change")
	private Integer avg_sight_change;

	@Column(name = "avg_ssq")
	private Integer avg_ssq;

	@Column(name = "avg_cvs")
	private Integer avg_cvs;

	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPic_location() {
		return pic_location;
	}

	public void setPic_location(String pic_location) {
		this.pic_location = pic_location;
	}

	public Integer getSound_pressure() {
		return sound_pressure;
	}

	public void setSound_pressure(Integer sound_pressure) {
		this.sound_pressure = sound_pressure;
	}

	public MobileBox() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getWeight() {
		return weight;
	}

	public void setWeight(Integer weight) {
		this.weight = weight;
	}

	public Integer getCpu() {
		return cpu;
	}

	public void setCpu(Integer cpu) {
		this.cpu = cpu;
	}

	public Integer getHeat() {
		return heat;
	}

	public void setHeat(Integer heat) {
		this.heat = heat;
	}

	public Integer getIrradiance() {
		return irradiance;
	}

	public void setIrradiance(Integer irradiance) {
		this.irradiance = irradiance;
	}

	public Integer getAngle_of_field() {
		return angle_of_field;
	}

	public void setAngle_of_field(Integer angle_of_field) {
		this.angle_of_field = angle_of_field;
	}

	public Integer getTrace_mode() {
		return trace_mode;
	}

	public void setTrace_mode(Integer trace_mode) {
		this.trace_mode = trace_mode;
	}

	public Integer getTrace_range() {
		return trace_range;
	}

	public void setTrace_range(Integer trace_range) {
		this.trace_range = trace_range;
	}

	public Integer getAvg_sight_change() {
		return avg_sight_change;
	}

	public void setAvg_sight_change(Integer avg_sight_change) {
		this.avg_sight_change = avg_sight_change;
	}

	public Integer getAvg_ssq() {
		return avg_ssq;
	}

	public void setAvg_ssq(Integer avg_ssq) {
		this.avg_ssq = avg_ssq;
	}

	public Integer getAvg_cvs() {
		return avg_cvs;
	}

	public void setAvg_cvs(Integer avg_cvs) {
		this.avg_cvs = avg_cvs;
	}
	
	
}
