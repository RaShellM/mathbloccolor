
	document.write('<table>');
	for(let i=1; i<=100; i++){
		
		document.write('<tr>');
		for(let j=1; j<=100; j++) {
			let z = parseInt(Math.random()*10);
			document.write('<td class=\"c'+z+'\">' + z + '</td>' );
		}
		document.write('</tr>');
	}
	document.write('</table>');