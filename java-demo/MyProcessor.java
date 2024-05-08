package com.example;

import java.util.Set;

import javax.annotation.processing.AbstractProcessor;
import javax.annotation.processing.ProcessingEnvironment;
import javax.annotation.processing.RoundEnvironment;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.annotation.processing.SupportedOptions;
import javax.annotation.processing.SupportedSourceVersion;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.TypeElement;

@SupportedOptions({ "name", "age" })
@SupportedAnnotationTypes("*")
@SupportedSourceVersion(SourceVersion.RELEASE_8) // jdk 太老只支持8
public class MyProcessor extends AbstractProcessor {
    @Override
    public synchronized void init(ProcessingEnvironment env) {
    }

    @Override
    public boolean process(Set<? extends TypeElement> annoations, RoundEnvironment env) {
    }

    /**
     * 原方法非 Abstracted
     * 
     * 获取当前的注解处理类能够处理哪些注解类型，默认实现是从SupportedAnnotationTypes注解里面获取；
     * 注解值是个字符串数组 String [] ;
     * 匹配上的注解,会通过当前的注解处理类的 process方法传入。
     */
    @Override
    public Set<String> getSupportedAnnotationTypes() {
    }

    /**
     * 原方法非 Abstracted
     * 
     * 获取该注解处理器最大能够支持多大的版本，默认是从注解 SupportedSourceVersion中读取，或者自己重写方法，如果都没有的话 默认值是 RELEASE_6
     */
    @Override
    public SourceVersion getSupportedSourceVersion() {
    }

    /**
     * 原方法非 Abstracted
     * 从注解SupportedOptions获取值，该值是一个字符数组
     */
    @Override
    public Set<String> getSupportedOptions() {
    }
}
