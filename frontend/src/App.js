import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';
import { Button } from '@material-tailwind/react';

class App extends Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route path="/contact" element={<BooksDisplay />} />
				</Routes>
			</Router>
		);
	}
}
function Landing(props) {
	const [ title, setTitle ] = useState('');

	function getInputValue(event) {
		setTitle(event.target.value);
	}

	// function handleClick(event) {
	// 	event.preventDefault();
	// 	const newBook = {
	// 		title: title
	// 	};
	// 	axios.post('http://localhost:3001/create', newBook);
	// }

	return (
		<div className="flex flex-col font-mono gap-12 text-left mx-8 sm:mx-40 text-base sm:text-lg font-medium text-normal mt-4">
			<div className="flex flex-row gap-2 font-semibold">
				<div className="w-[75%] ">GoBlueJays</div>
				<div className="w-[15%] text-center underline ">HOME</div>
				<div
					className="w-[10%] text-center hover:underline"
					onClick={() => {
						window.location.href = '/contact';
					}}
				>
					Contact
				</div>
			</div>
			<div className="flex flex-col gap-4 sm:gap-8">
				<div className="text-3xl font-bold sm:text-4xl">ABOUT</div>
				<div className="flex flex-col text-base sm:text-lg gap-2">
					<div>
						View class schedules, dining menus, campus maps, upcoming events, and more from your smartphone!{' '}
					</div>
					<div>
						<em>GoBlueJays</em> is the all-in-one campus mobile app for Johns Hopkins Univeristy students
						that powers extraordinary campus experience.{' '}
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4 sm:gap-8">
				<div className="text-3xl font-bold sm:text-4xl">ACADEMIC YEAR 2021-2022</div>
				<div className="text-base flex flex-col sm:text-lg gap-2">
					<em>
						<div>(in alphabetical order)</div>
					</em>
					<div>David Liu</div>
					<div>Heed Liu</div>
					<div>Jessie Luo</div>
					<div>Kaia Gao</div>
					<div>Murphy Cheng</div>
					<div>Thomas Yu</div>
				</div>
			</div>
		</div>
	);
}

function BooksDisplay(props) {
	const [ books, setBooks ] = useState([]);
	useEffect(() => {
		fetch('/books')
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((jsonRes) => setBooks(jsonRes));
	});
	return (
		<div className="flex flex-col font-mono gap-12 text-left mx-8 sm:mx-40 text-base sm:text-lg font-medium text-normal mt-4">
			<div className="flex flex-row gap-2 font-semibold">
				<div className="w-[75%] ">GoBlueJays</div>
				<div
					className="w-[15%] text-center hover:underline "
					onClick={() => {
						window.location.href = '/';
					}}
				>
					HOME
				</div>
				<div className="w-[10%] text-center underline">Contact</div>
			</div>
			<div className="gap-4">
				<div className="text-3xl mb-4 font-bold sm:text-4xl">Report Issues</div>
				<div class="border-dashed border-2 rounded-md border-indigo-600 w-[100%] h-32">
					<textarea type="text" class="w-[100%] h-20" placeholder="example@corp.com" />
				</div>
				<button class="rounded-none bg-[#e9f1d8] pt-6 text-lg w-[15%] flex flex-row">
					<div class="flex flex-row">Add new event</div>
				</button>
			</div>
		</div>
	);
}

export default App;
