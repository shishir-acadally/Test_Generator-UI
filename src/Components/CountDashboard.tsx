import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
// import {QuestionsCount} from '../httpservice';
import PageLayout from './PageLayout';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <i className="bi bi-chevron-bar-right"></i> : <i className="bi bi-chevron-bar-left"></i>}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <i className="bi bi-chevron-right"></i> : <i className="bi bi-chevron-left"></i>}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <i className="bi bi-chevron-left"></i> : <i className="bi bi-chevron-right"></i>}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <i className="bi bi-chevron-bar-left"></i> : <i className="bi bi-chevron-bar-right"></i>}
            </IconButton>
        </Box>
    );
}

function createData(name: string, lu1O: number, lu1C: number, lu2O: number, lu2C: number, lu3O: number, lu3C: number) {
    return { name, lu1O, lu1C, lu2O, lu2C, lu3O, lu3C };
}

const rows = [
    createData('LU1', 1, 2, 3, 4, 5,6),
    createData('LU2', 1, 2, 3, 4, 5,6),
    createData('LU3', 1, 2, 3, 4, 5,6),
    createData('LU4', 1, 2, 3, 4, 5,6),
    createData('LU5', 1, 2, 3, 4, 5,6),
    createData('LU6', 1, 2, 3, 4, 5,6),
    createData('LU7', 1, 2, 3, 4, 5,6),
    createData('LU8', 1, 2, 3, 4, 5,6),
    createData('LU9', 1, 2, 3, 4, 5,6),
    createData('LU10', 1, 2, 3, 4, 5,6),
    createData('LU11', 1, 2, 3, 4, 5,6),
    createData('LU12', 1, 2, 3, 4, 5,6),
    createData('LU13', 1, 2, 3, 4, 5,6),
].sort((a, b) => (a.name < b.name ? -1 : 1));

const CountDashboard: React.FC = () => {
    const [questionData, setQuestionData] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    // Data to show
    // QuestionsCount()
    // .then((res: any)=>{
    //     console.log("Response for dashboard: ", res);
    //     setQuestionData(res);
    //     console.log("AFter formatting: ", questionData);
    // })
    // .catch((error: any) => {
    //     console.error("Error getting dashboard data: ", error);
    // })

    // const tableData = React.useMemo(() => {
    //     return questionData.map((lu) => {
    //       // Initialize counts for each level
    //       let originalLevel1Count = 0;
    //       let originalLevel2Count = 0;
    //       let originalLevel3Count = 0;
    //       let cloneLevel1Count = 0;
    //       let cloneLevel2Count = 0;
    //       let cloneLevel3Count = 0;
    
    //       // Process each learning object
    //       lu.loids.forEach((lo) => {
    //         // Extract the level suffix from the loid
    //         const loidMatch = lo.loid.match(/\.(\d{3})\)?$/);
    //         if (loidMatch) {
    //           const levelSuffix = loidMatch[1];
              
    //           // Categorize based on the level suffix
    //           if (levelSuffix === "001" || levelSuffix === "002") {
    //             originalLevel1Count += lo.question_count;
    //             cloneLevel1Count += lo.clone_question_count || 0;
    //           } else if (levelSuffix === "003") {
    //             originalLevel2Count += lo.question_count;
    //             cloneLevel2Count += lo.clone_question_count || 0;
    //           } else if (levelSuffix === "004" || levelSuffix === "005") {
    //             originalLevel3Count += lo.question_count;
    //             cloneLevel3Count += lo.clone_question_count || 0;
    //           }
    //         }
    //       });
    
    //       // Calculate total count
    //       const totalCount = 
    //         originalLevel1Count + 
    //         originalLevel2Count + 
    //         originalLevel3Count + 
    //         cloneLevel1Count + 
    //         cloneLevel2Count + 
    //         cloneLevel3Count;
    
    //       return {
    //         luid: lu.luid,
    //         lu_name: lu.lu_name,
    //         originalLevel1Count,
    //         originalLevel2Count,
    //         originalLevel3Count,
    //         cloneLevel1Count,
    //         cloneLevel2Count,
    //         cloneLevel3Count,
    //         totalCount,
    //       };
    //     });
    //   }, [questionData]);


    return (
        <PageLayout title="Questions Dashboard">
            <div className="card">
                <div className="card-body">
                    <TableContainer component={Paper} elevation={0}>
                        <Table sx={{ minWidth: 700 }}>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>LU Name</StyledTableCell>
                                    <StyledTableCell align="center">L1 Original</StyledTableCell>
                                    <StyledTableCell align="center">L1 Clone</StyledTableCell>
                                    <StyledTableCell align="center">L2 Original</StyledTableCell>
                                    <StyledTableCell align="center">L2 Clone</StyledTableCell>
                                    <StyledTableCell align="center">L3 Original</StyledTableCell>
                                    <StyledTableCell align="center">L3 Clone</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : rows
                                ).map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.lu1O}</StyledTableCell>
                                        <StyledTableCell align="center">{row.lu1C}</StyledTableCell>
                                        <StyledTableCell align="center">{row.lu2O}</StyledTableCell>
                                        <StyledTableCell align="center">{row.lu2C}</StyledTableCell>
                                        <StyledTableCell align="center">{row.lu3O}</StyledTableCell>
                                        <StyledTableCell align="center">{row.lu3C}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={7}
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        slotProps={{
                                            select: {
                                                inputProps: {
                                                    'aria-label': 'rows per page',
                                                },
                                                native: true,
                                            },
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </PageLayout>
    );
}

export default CountDashboard;