package com.vr.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "allinonepc")
public class AllInOnePC {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

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

	@Column(name = "name")
	private String name;
	
	@Column(name = "pic_location")
	private String pic_location;
	
	@Column(name = "screen_type")
	private String screen_type;

	@Column(name = "resolution")
	private String resolution;

	@Column(name="sound_pressure")
	private Integer sound_pressure;
	
	@Column(name = "weight")
	private Integer weight;

	@Column(name = "cpu")
	private Integer cpu;

	@Column(name = "memory")
	private Integer memory;

	@Column(name = "battery_capacity")
	private Integer battery_capacity;

	@Column(name = "heat")
	private Integer heat;

	@Column(name = "irradiance")
	private Integer irradiance;

	@Column(name = "boundary_warning")
	private String boundary_warning;

	@Column(name = "em_compability_path")
	private String em_compability_path;

	@Column(name = "angle_of_field")
	private Integer angle_of_field;

	@Column(name = "refresh_rate")
	private Integer refresh_rate;

	@Column(name = "system_latency")
	private Integer system_latency;

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

	public AllInOnePC() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getScreen_type() {
		return screen_type;
	}

	public void setScreen_type(String screen_type) {
		this.screen_type = screen_type;
	}

	public String getResolution() {
		return resolution;
	}

	public void setResolution(String resolution) {
		this.resolution = resolution;
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

	public Integer getMemory() {
		return memory;
	}

	public void setMemory(Integer memory) {
		this.memory = memory;
	}

	public Integer getBattery_capacity() {
		return battery_capacity;
	}

	public void setBattery_capacity(Integer battery_capacity) {
		this.battery_capacity = battery_capacity;
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

	public String getBoundary_warning() {
		return boundary_warning;
	}

	public void setBoundary_warning(String boundary_warning) {
		this.boundary_warning = boundary_warning;
	}

	public String getEm_compability_path() {
		return em_compability_path;
	}

	public void setEm_compability_path(String em_compability_path) {
		this.em_compability_path = em_compability_path;
	}

	public Integer getAngle_of_field() {
		return angle_of_field;
	}

	public void setAngle_of_field(Integer angle_of_field) {
		this.angle_of_field = angle_of_field;
	}

	public Integer getRefresh_rate() {
		return refresh_rate;
	}

	public void setRefresh_rate(Integer refresh_rate) {
		this.refresh_rate = refresh_rate;
	}

	public Integer getSystem_latency() {
		return system_latency;
	}

	public void setSystem_latency(Integer system_latency) {
		this.system_latency = system_latency;
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
