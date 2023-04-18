package com.aswatson.atm.enums;

import com.aswatson.atm.core.model.AliasExample;
import tk.mybatis.mapper.entity.Example;

public interface ExampleInterface {
    public void or(Example.Criteria criteria);

    public Example.Criteria or();
}
