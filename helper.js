function createAudioHTML(path) {
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}


function generateExampleRow(table_row, base_path, filename_ext, col_offset) {
  for (var i = 0; i < filename_ext.length; i++) {
    let p = base_path + filename_ext[i];
    let cell = table_row.cells[col_offset + i];
    // console.log(table_row.cells.length)
    if (p.endsWith('txt')) {
      var req = new XMLHttpRequest();
      req.open("GET", p, false);
      req.send(null);
      cell.innerHTML = '<font size="-1">' + req.responseText + '</font>';
    } else {
      cell.innerHTML = cell.innerHTML + createAudioHTML(p);
    }
  }
}

function generateExampleRowCross(table_row, base_path, filename_ext, col_offset) {
  for (var i = 0; i < filename_ext.length; i++) {
    let p = base_path + filename_ext[i];
    if (i === 1) {
      col_offset = col_offset + 1
    } 

    let cell = table_row.cells[col_offset + i];
    // console.log(table_row.cells.length)
    if (p.endsWith('txt')) {
      var req = new XMLHttpRequest();
      req.open("GET", p, false);
      req.send(null);
      cell.innerHTML = '<font size="-1">' + req.responseText + '</font>';
    } else {
      cell.innerHTML = cell.innerHTML + createAudioHTML(p);
    }
  }
}

function generatePrompt(tableId) {
  let table = document.getElementById(tableId);
  let ext = ["_gt.wav", "_raw.txt", "_raw'.txt", "_gt.txt", "_gt'.txt", "_ours.txt"];
  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], "data/prompt/" + i, ext, 0);
  }
}

function generateTranscription(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_gt.wav', '_prompt.txt', '_newprompt.txt', '_gt.txt', '_hugging.txt', '_qwen.txt', '_ours.txt'];

  for (var i = 0; i < 3; i++) {
    generateExampleRow(table.rows[1 + i], 'data/enhancement/transcription/' + i, ext, 0);
  }
}

function generateTranslation(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_gt.wav', '_raw.txt', '_prompt.txt','_newprompt.txt', '_possible.txt', '_qwen.txt','_ours.txt'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/enhancement/translation/' + i, ext, 0);
  }
}

function generateAudioEnhance(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_raw.wav', '_prompt.txt','_newprompt.txt','_hugging.wav','_ours.wav'];

  for (var i = 0; i < 3; i++) {
    generateExampleRow(table.rows[1 + i], 'data/enhancement/enhancement/' + i, ext, 0);
  }
}

function generatePipeline(tableId) {  
  let table = document.getElementById(tableId);  
  let ext = ['_wav.txt', '_enhance.txt', '_define.txt', '_asr.txt', '_translate.txt','_tts.txt'];  
  let ext1 = ['_raw.wav', '_enhance.wav', '_define.txt', '_asr.txt', '_translate.txt','_yourtts.wav']  
  
  for (var i = 0; i < 4; i++) {  
    if (i % 2 === 0) {  
      generateExampleRow(table.rows[1 + i], 'data/pipeline/' + i, ext, 0);  
    } else {  
      generateExampleRow(table.rows[1 + i], 'data/pipeline/' + i, ext1, 0);  
    }  
  } 
} 


function generateMultitool(tableId) {
  let table = document.getElementById(tableId);
  let ext = ["_gt.wav", "_prompt.txt","_newprompt.txt","_reply.txt"];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/Multi/' + i, ext, 0);
  }
}

generatePrompt('prompt-table')
generateTranscription('transcription')
generateTranslation('translation')
generateAudioEnhance('audioenhance')
generatePipeline('pipeline-table')
generateMultitool('multiselection')




