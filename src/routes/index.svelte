<script>
	import Chart from 'svelte-frappe-charts';
	import { app, db } from '../firebase';
	import { collection, getDocs, doc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let valueLabels = ['first', 'second'];
	let values = [2, 10];

	const dbRef = collection(db, 'moods');
	onMount(() => {
		func();
	});

	async function func() {
		const snapshot = await getDocs(dbRef);
		snapshot.forEach((doc) => {
			console.log(doc.data().label, doc.data().mood);
		});
	}

	let data = {
		labels: valueLabels,
		datasets: [
			{
				values: values
			}
		]
	};
</script>

<Chart {data} type="line" />
