var simplemaps_countymap_mapdata = {

	main_settings:{
		//General settings
		width: '1200', //or 'responsive'
		background_color: '#000000',	
		background_transparent: 'no',
		border_color: '#ffffff',
		popups: 'detect', //on_click, on_hover, or detect
	
		//State defaults
		state_description:   '',
		state_color: '#88A4BC',
		state_hover_color: '#3B729F',
		state_url: '#',
		border_size: 1.5,		
		all_states_inactive: 'no',
		all_states_zoomable: 'no',		
		
		//Location defaults
		location_description:  '',
		location_color: '#FF0067',
		location_opacity: .8,
		location_hover_opacity: 1,
		location_url: '',
		location_size: 25,
		location_type: 'square', // circle, square, image
		location_image_source: 'frog.png', //name of image in the map_images folder		
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,				
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',
		
		//Labels
		label_color: '#d5ddec',	
		label_hover_color: '#d5ddec',		
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',
		
		//Zoom settings
		zoom: 'yes', //use default regions
		back_image: 'no', //Use image instead of arrow for back zoom				
		arrow_color: '#3B729F',
		arrow_color_border: '#88A4BC',
		initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click		
		initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc	
		initial_zoom_solo: 'no', //hide adjacent states when starting map zoomed in
		region_opacity: 1,
		region_hover_opacity: .6,
		zoom_out_incrementally: 'yes',  // if no, map will zoom all the way out on click
		zoom_percentage: .99,
		zoom_time: .5, //time to zoom between regions in seconds
		
		//Popup settings
		popup_color: 'white',
		popup_opacity: .9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css	
		
		//Advanced settings
		div: 'map',
		auto_load: 'yes',		
		url_new_tab: 'no', 
		images_directory: 'default', //e.g. 'map_images/'
		fade_time:  .1, //time to fade out		
		link_text: '(Link)'  //Text mobile browsers will see for links	
	},

	//Note:  To keep the mapdata.js file small, we have not pre-provided all counties below.  Follow the format below to make changes from the default.
	// state_specific:{  
	// 	"01001": { 
	// 		name: 'Autauga',
	// 		description: 'default',
	// 		color: 'default',
	// 		hover_color: 'default',
	// 		url: 'default'
	// 	} //omit last comma
	// },

	// locations:{ 
	// 	'0': { 
	// 		name: 'New York',
	// 		lat: '40.71',
	// 		lng: '-74.0059731',
	// 		description: '',
	// 		color: 'default',
	// 		url: 'default',
	// 		size: 'default'
	// 	}
	// }

}	//end of simplemaps_worldmap_mapdata


