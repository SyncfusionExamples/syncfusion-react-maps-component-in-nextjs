'use client'
import { world_map } from './world-map';
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
 function App() {
    return (<MapsComponent id="maps">
            <LayersDirective>
                <LayerDirective shapeData={world_map}>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>);
}
export default App;