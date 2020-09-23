import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import Dashbord from '../pages/DashBord';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name='Dashbord' component={Dashbord}/>
    </AppStack.Navigator>
)

export default AppRoutes;