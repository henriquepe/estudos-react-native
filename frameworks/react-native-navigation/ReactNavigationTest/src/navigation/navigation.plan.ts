import { Navigation } from "react-native-navigation";

export default function organizeNavigation() {
    Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: '#4d089a'
        },
        topBar: {
            title: {
            color: 'white'
            },
            backButton: {
            color: 'white'
            },
            background: {
            color: '#4d089a'
            }
        },
        bottomTab: {
            fontSize: 18,
            selectedFontSize: 14
        }
    });
    
    Navigation.events().registerAppLaunchedListener(async () => {
        await Navigation.setRoot({
            root: {
            bottomTabs: {
                children: [
                {
                    stack: {
                    children: [
                        {
                        component: {
                            name: 'Home'
                        }
                        },
                    ]
                    }
                },
                {
                    stack: {
                    children: [
                        {
                        component: {
                            name: 'Welcome'
                        }
                        }
                    ]
                    }
                }
                ]
            }
            }
        });
    });
}