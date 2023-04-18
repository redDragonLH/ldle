package com.aswatson.atm.enums;

import org.springframework.cglib.proxy.InvocationHandler;

import java.lang.reflect.Method;

public class TATPInvocationHandler implements InvocationHandler {

    private Object target;

    public TATPInvocationHandler(Object target) {
        this.target = target;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        return method.invoke(target, args);
    }
}
