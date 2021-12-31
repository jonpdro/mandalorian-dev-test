package org.acme.model;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TaskTO {

	public String key;

	@Size(min = 10)
	@Pattern(regexp = "^[a-zA-Z ][a-zA-Z0-9 ]+$")
	public String value;

	public TaskTO(String key, @Size(min = 10) @Pattern(regexp = "^[a-zA-Z ][a-zA-Z0-9 ]+$") String value) {
		this.key = key;
		this.value = value;
	}

	public TaskTO() {
	}

}
