package com.fashionette.utilities;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;


public class ConfigurationReader {
    private static ConfigurationReader configReader;
    private static Properties properties;

    static {

        try {
            String path = "configuration.properties";
            FileInputStream input = new FileInputStream(path);
            properties = new Properties();
            properties.load(input);

            input.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String get(String keyName) {

        return properties.getProperty(keyName);
    }


}
