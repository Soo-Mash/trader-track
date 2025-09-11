import { Box, Paper } from '@mui/material'
import Grid from '@mui/material/Grid'
import mapImage from '../../assets/Map-with-markers-temp.jpeg'
import { PieChart } from '@mui/x-charts/PieChart'
import { LineChart } from '@mui/x-charts/LineChart'

// TODO: This is a placeholder dashboard - to be replaced with real data and charts later
const Dashboard = () => {
   const invoiceData = [
      { label: 'Paid', value: 12, color: '#00C49F' },
      { label: 'Unpaid', value: 7, color: '#fec300ff' },
      { label: 'Overdue', value: 7, color: '#fe6a00ff' },
   ]
   const quoteData = [
      { label: 'Draft', value: 2, color: '#929292ff' },
      { label: 'Sent', value: 15, color: '#fec300ff' },
      { label: 'Accepted', value: 7, color: '#00C49F' },
      { label: 'Rejected', value: 17, color: '#fe6a00ff' },
   ]

   const donutSettings = {
      margin: { right: 5 },
      width: 200,
      height: 200,
   }

   return (
      <div className="page page-dashboard">
         <Box sx={{ flexGrow: 1, flexDirection: 'column' }}>
            <Grid
               container
               spacing={{ xs: 2, md: 2 }}
               columns={{ xs: 4, sm: 8, md: 12 }}
            >
               {/* First Row */}
               <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                  <Paper>
                     Active Jobs
                     <br />2
                  </Paper>
               </Grid>
               <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                  <Paper>
                     Qualified Leads
                     <br />7
                  </Paper>
               </Grid>
               <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                  <Paper>
                     Revenue
                     <br />
                     £75,000
                  </Paper>
               </Grid>

               {/* Second Row */}
               <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <Paper sx={{ minHeight: 200, height: '100%' }}>
                     Recent Jobs
                     <br />
                     Job1
                     <br />
                     <br />
                     Job2
                     <br />
                     <br />
                     Job3
                     <br />
                     <br />
                     Job4
                     <br />
                     <br />
                     Job5
                     <br />
                     <br />
                     Job6
                  </Paper>
               </Grid>
               <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <Paper
                     sx={{ minHeight: 300, maxHeight: 300, overflow: 'hidden' }}
                  >
                     <img
                        src={mapImage}
                        alt="Maps"
                        style={{
                           width: '100%',
                           height: '100%',
                           objectFit: 'cover',
                           objectPosition: '30% 30%', // Add this line
                        }}
                     />
                  </Paper>
               </Grid>

               {/* Third Row */}
               <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Paper sx={{ padding: 2 }}>
                     Invoices for Month
                     <PieChart
                        series={[
                           {
                              innerRadius: 50,
                              outerRadius: 100,
                              data: invoiceData,
                              arcLabel: 'value',
                              cornerRadius: 5,
                              paddingAngle: 2,
                           },
                        ]}
                        {...donutSettings}
                     />
                  </Paper>
               </Grid>
               <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Paper sx={{ padding: 2 }}>
                     Quotes for Month
                     <PieChart
                        series={[
                           {
                              innerRadius: 50,
                              outerRadius: 100,
                              data: quoteData,
                              arcLabel: 'value',
                              cornerRadius: 5,
                              paddingAngle: 2,
                           },
                        ]}
                        {...donutSettings}
                     />
                  </Paper>
               </Grid>

               {/* Fourth Row */}
               <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <Paper sx={{ padding: 2 }}>
                     Quote Conversion
                     <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                           {
                              data: [2, 5.5, 2, 8.5, 1.5, 5],
                           },
                           {
                              data: [1, 5, 5, 8, 1.8, 5],
                           },
                        ]}
                        height={300}
                     />
                  </Paper>
               </Grid>
            </Grid>
         </Box>
      </div>
   )
}

export default Dashboard
