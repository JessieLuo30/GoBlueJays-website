import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';

class App extends Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route path="/notes" element={<BooksDisplay />} />
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

	function handleClick(event) {
		event.preventDefault();
		const newBook = {
			title: title
		};
		axios.post('http://localhost:3001/create', newBook);
	}

	return (
		<div className="flex flex-col text-center gap-4 font-medium text-lg mt-12">
			<div>Add to my favorite books</div>
			<div className="flex flex-row gap-4 items-center justify-center">
				<input type="text" placeholder="type here..." className="shadow " onChange={getInputValue} />

				<a
					onClick={() => {
						window.location.href = '/notes';
					}}
				>
					<button
						onClick={handleClick}
						class=" items-center justify-center h-7 px-6 text-center box-border bg-[#2CB67D] rounded-xl text-[16px] text-white"
					>
						submit
					</button>
				</a>
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
		<div className="w-screen">
			<a
				onClick={() => {
					window.location.href = '/';
				}}
				className="pt-8 ml-4"
			>
				back
			</a>
			<div className="flex flex-col text-center items-center gap-4 font-medium text-lg">
				<div>♡ Jessie's favorite book list ♡</div>

				<div className="bg-amber-50 w-80 justify-center items-center text-center">
					{books.map((book) => <div className="font-normal">{book.title}</div>)}
				</div>
			</div>
		</div>
	);
}

export default App;
