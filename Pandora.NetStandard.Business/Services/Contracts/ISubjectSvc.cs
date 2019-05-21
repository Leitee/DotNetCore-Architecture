﻿using Pandora.NetStandard.Core.Bases;
using Pandora.NetStandard.Core.Interfaces;
using Pandora.NetStandard.Model.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pandora.NetStandard.Business.Services.Contracts
{
    public interface ISubjectSvc : IBasicCrudOperations<SubjectDto>
    {
        Task<BLSingleResponse<bool>> EnrollStudentAsync(StudentDto studentDto, int subjectId);
        Task<BLSingleResponse<bool>> SaveExamResultAsync(IList<ExamDto> examDtos);
    }
}