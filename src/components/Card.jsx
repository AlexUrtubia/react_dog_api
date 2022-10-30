import React from 'react'

export default function Card(props) {
  return (
      <div class="w-full h-auto flex border rounded">
			<div class="h-48 w-72 p-0 self-center grow bg-cover rounded-l  text-center overflow-hidden"  
			style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover'}}>
			</div>
			<div class=" w-[400px]   bg-white rounded-r p-4 flex flex-col justify-between leading-normal">
				<div class="mb-8">
					<div class="text-gray-900 font-bold space-y-3 text-xl mb-2">{props.name}</div>
					<p class="text-gray-700 text-base">Temperament: {props.temperament}</p><br />
					<p class="text-gray-700 text-base">Bred for: {props.bred_for}</p>
				</div>
			</div>
	</div>
  )
}
