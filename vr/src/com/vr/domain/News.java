package com.vr.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="news")
public class News {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
    private Integer id;
	
	@Column(name="tag")
    private String tag;
	
	@Column(name="title")
    private String title;
	
	@Column(name="path")
    private String path;
	
	@Column(name="last_edit_time")
    private String last_edit_time;
	
	@Column(name="source")
    private String source;
    
    @Column(name="upvote")
    private Integer upvote;
    
    @Column(name="downvote")
    private Integer downvote;
    
    @Column(name="editor_id")
    private Integer editor_id;
    
    @Column(name="author")
    private String author;
    
    @Column(name="news_abstract")
    private String news_abstract;
    
    @Transient
    private String content;
    
    @Column(name="pic_location")
    private String pic_location;
    
    @Column(name="is_push")
    private Integer is_push;

	public News() {

	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getLast_edit_time() {
		return last_edit_time;
	}

	public void setLast_edit_time(String last_edit_time) {
		this.last_edit_time = last_edit_time;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public Integer getUpvote() {
		return upvote;
	}

	public void setUpvote(Integer upvote) {
		this.upvote = upvote;
	}

	public Integer getDownvote() {
		return downvote;
	}

	public void setDownvote(Integer downvote) {
		this.downvote = downvote;
	}

	public Integer getEditor_id() {
		return editor_id;
	}

	public void setEditor_id(Integer editor_id) {
		this.editor_id = editor_id;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getNews_abstract() {
		return news_abstract;
	}

	public void setNews_abstract(String news_abstract) {
		this.news_abstract = news_abstract;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getPic_location() {
		return pic_location;
	}

	public void setPic_location(String pic_location) {
		this.pic_location = pic_location;
	}

	public Integer getIs_push() {
		return is_push;
	}

	public void setIs_push(Integer is_push) {
		this.is_push = is_push;
	}
    
}