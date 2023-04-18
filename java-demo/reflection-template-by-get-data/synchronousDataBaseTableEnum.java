package com.aswatson.atm.enums;

import com.aswatson.atm.core.model.TestCaseExample;
import com.aswatson.atm.util.SpringUtil;
import io.undertow.security.idm.Credential;
import lombok.Getter;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.proxy.Proxy;
import org.springframework.util.ReflectionUtils;

import java.io.Serializable;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

@Getter
public enum synchronousDataBaseTableEnum {
    TESTCASE("test_case", "TestCaseExample"){
    };
    public Object getData(String buCode,String projectId) throws ClassNotFoundException, NoSuchMethodException, InvocationTargetException, IllegalAccessException, InstantiationException {
        Object instance = this.getInstance(this.mapperClassName);

        ExampleInterface example = (ExampleInterface)this.geExample();
        example.or();
        Method method = instance.getClass().getMethod("selectByExample", Serializable.class);
        return method.invoke(instance,2);
    }
    @Autowired
    public SqlSession sqlSession;
    private String mapperClassName;
    private String exampleName ;
    synchronousDataBaseTableEnum(String mapperClassName, String example) {
        this.mapperClassName = mapperClassName;
        this.exampleName = example;
    }
    private Object getInstance(String className) throws ClassNotFoundException {
        Class interfaceImpl = Class.forName(className);//这里要写全类名
        Object instance = Proxy.newProxyInstance(
                interfaceImpl.getClassLoader(),
                new Class[]{interfaceImpl},
                new TATPInvocationHandler(sqlSession.getMapper(interfaceImpl))
        );
        return instance;
    }
    private Object geExample() throws ClassNotFoundException, InstantiationException, IllegalAccessException, NoSuchMethodException, InvocationTargetException {
        Class testCaseExampleClazz=Class.forName("TestCaseExample");//获取到类对象
        Object testCaseExample=testCaseExampleClazz.newInstance();//获取到类的实例
        Method exampleMethod=testCaseExample.getClass().getMethod("or");//获取到类中的or()，这里or方法是无参的，故无须给其传递参数，若是String类型，则写成String.class；(注意:我们在组装方法的时候应该进入到具体类中去看该方法是什么类型的，criteria类型就应该用criteria对象来进行调用，void则可以直接使用obj进行，andPk_ParentEqualTo()就应该用执行完or()的对象来调用)
        return exampleMethod.invoke(testCaseExample);
    }
}

