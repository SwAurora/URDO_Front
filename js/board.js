function addtr(){
    alert("게시판추가");
    
  const table = document.getElementById('t1');
  
  // 새행(row)추가
  const newRow = table.insertRow();
  
  // 새행에 cell추가
  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);
  const newCell3 = newRow.insertCell(2);
  const newCell4 = newRow.insertCell(3);
  const newCell5 = newRow.insertCell(4);
  const newCell6 = newRow.insertCell(5);
  const newCell7 = newRow.insertCell(6);
  
  newCell1.innerHTML='index자리';
  newCell2.innerHTML='<img src="../img/board/frog.png" class="pic">';
  newCell3.innerHTML='<a href="boardContents.html" class="boardlist">가위바위보를 이기는방법</a>';
  newCell4.innerHTML='333';
  newCell5.innerHTML='91';
  newCell6.innerHTML='관리자';
  newCell7.innerHTML='2022-06-16';
  
  }
  
  // table  index 를이용해서  제거가능한것으로 추가하기 
                function deleteRow(rownum) {
                   alert('삭제되었습니다.');
                   const table = document.getElementById('t1');
  
                   // 행(Row) 삭제
                   const deRow = table. deleteRow(rownum);
                                    } 

// 이건 학교가서해보기  여기서는 집중안됨
                                    // $(document).ready(function () {
                                    //   $('.tabBtn').on('click', function () {
                                    //     idx = $(this).index();
                                    //     $('.tabBtn').removeClass('on');
                                    //     $('.tabBtn').eq(idx).addClass('on');
                                    //     $('.tabContents').removeClass('on');
                                    //     $('.tabContents').eq(idx).addClass('on');
                                    //   })
                                    
                                    
                                    //   $('.page_num').on('click', function() {
                                    //     idx2 = $(this).index();
                                    //     alert(idx2);
                                    //     $('.page_num').removeClass('on');
                                    //     $('.page_num').eq(idx2).addClass('on');
                                    //     $('.pageContents').removeClass('on');
                                    //     $('.pageContents').eq(idx2).addClass('on');
                                    //   })
                                    
                                    //   $('.page_arrow').on('click', function() {
                                    //     idx3=$('on').index();
                                    //     alert(idx3);
                                    //   })
                                    
                                    // });