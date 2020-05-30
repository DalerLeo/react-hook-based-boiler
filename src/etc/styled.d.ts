// import original module declarations
import 'styled-components'

/*
cube: {
    border: string;
    textColor: string;
    primaryColor: string;
    colorRed: string;
    colorOrange: string;
    colorYellow: string;
    lightGreyColor: string;
    hoverBackgroundColor: string;
    selectBackgroundColor: string;
    boxShadow: string;
    transition: string;
};
input: {
    backgroundColor: string;
    backgroundColorHover: string;
    borderRadius: string;
    borderColor: string;
    labelColor: string;
    placeholderColor: string;
};
borderRadius: string; */
// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        border: string;
        borderColor: string;
        boxShadow: string;
        transition: string;
        transitionTime: string;
        borderRadius: {
            md: string;
            sm: string;
        };
        colors: {
            primary: {
                default: string;
                hover: string;
            };
            text: string;
            grey: string;
            black: string;
        };
        cube: {
            borderRadius: {
                md: string;
                sm: string;
            };
            shadows: {
                md: '';
                sm: '';
                lg: '';
            };
            palette: {
                primary: {
                    main: string;
                    light: string;
                    dark: '';
                    hover: string;
                    active: string;
                    focus: '';
                };
                secondary: {
                    main: '';
                    light: '';
                    dark: '';
                    hover: '';
                    active: '';
                    focus: '';

                };
                danger: {
                    main: '';
                    light: '';
                    dark: '';
                    hover: '';
                    active: '';
                    focus: '';

                };
            };
            input: {
                colors: {
                    background: '';
                    hover: '';
                    label: '';
                    placeholder: '';
                    border: '';
                };
            };
        };

    }
}
