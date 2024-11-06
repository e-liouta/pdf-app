<script>
	// import Logo from "./images/jumper-logo.png";

	export let client = 'Client Name';
	export let date = '2024-11-05';
	export let reportNumber = 'R12345';
	export let contact = 'Contact Name';
  
	export let travelData = {
	  travelDate: '2024-11-05',
	  departure: '08:00',
	  arrival: '10:00',
	  total: '2 hours',
	};
  
	export let workData = {
	  workDate: '2024-11-05',
	  from: '09:00',
	  until: '17:00',
	  break: '1 hour',
	  total: '7 hours',
	};
  
	export let report = 'Detailed report text here...';
  </script>
  
  <style>
	img {
	  float: right;
	}
  
	body {
	  font-family: Arial, sans-serif;
	  margin: 20px;
	}
  
	h1 {
	  color: #333;
	}
  
	p {
	  font-size: 16px;
	  line-height: 1.5;
	}
  
	.details {
	  display: flex;
	  flex-direction: column;
	}
  
	table {
	  width: 100%;
	  border-collapse: collapse;
	}
  
	th {
	  color: black;
	  border-bottom: 1px solid gray;
	  text-align: center;
	  font-weight: 300;
	  padding: 0.4rem 0;
	}
  
	td {
	  color: gray;
	  text-align: center;
	  font-weight: 300;
	  padding: 0.4rem 0;
	}
  
	.right {
	  text-align: right;
	  font-weight: bold;
	  color: black;
	}
  
	.total {
	  color: black;
	}
  </style>
  
  <div>
	<!-- <img src={Logo} alt="Logo" /> -->
	<h1>Service Report</h1>
	<h2>Report for {client}</h2>
  
	<div class="details">
	  <span>Date: {date}</span>
	  <span>Report Number: {reportNumber}</span>
	  <span>Client: {client}</span>
	  <span>Contact Name: {contact}</span>
	</div>
  
	<div class="Travel Time">
	  <h2>Travel Time</h2>
	  <table>
		<tr>
		  <th>Date</th>
		  <th>Departure</th>
		  <th>Arrival</th>
		  <th>Total</th>
		</tr>
		<tr>
		  <td>{travelData.travelDate}</td>
		  <td>{travelData.departure}</td>
		  <td>{travelData.arrival}</td>
		  <td>{travelData.total}</td>
		</tr>
		<tr>
		  <td></td>
		  <td></td>
		  <td class="right">Total:</td>
		  <td class="total">{travelData.total}</td>
		</tr>
	  </table>
	</div>
  
	<div class="Work Time">
	  <h2>Work Time</h2>
	  <table>
		<tr>
		  <th>Date</th>
		  <th>From</th>
		  <th>Until</th>
		  <th>Break</th>
		  <th>Total</th>
		</tr>
		<tr>
		  <td>{workData.workDate}</td>
		  <td>{workData.from}</td>
		  <td>{workData.until}</td>
		  <td>{workData.break}</td>
		  <td>{workData.total}</td>
		</tr>
		<tr>
		  <td></td>
		  <td></td>
		  <td class="right">Total:</td>
		  <td class="total">{workData.total}</td>
		</tr>
	  </table>
	</div>
  
	<div class="report">
	  <h2>Report</h2>
	  <p>{report}</p>
	</div>
  </div>
  