import React, {useEffect, useState} from 'react'

export function UseEffectWithDependencies() {
		const [count, setCount] = useState(0);

		// thay đổi giá trị của count
		const incrementCount = () => {
			setCount(count + 1);
		}
		
		// không thay đổi giá trị của count
		const doNothing = () => {
			setCount(count);
		}

		// useEffect callback được gọi khi state thay đổi so với giá trị trước đó
		useEffect(() => {
			console.log("useEffect ran.");
		}, [count])
	
		return (
			<>
        <h1>useEffect có dependencies </h1>
				<h1>{count}</h1>

				<button onClick={incrementCount}>Tăng thêm</button>
				<button onClick={doNothing}>Không có gì xảy ra</button>
			</>
		); 
	}