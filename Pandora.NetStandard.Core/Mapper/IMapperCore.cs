﻿using AutoMapper;
using System.Collections.Generic;

namespace Pandora.NetStandard.Core.Mapper
{
    public interface IMapperCore<in TConvertEntity, out TResultEntity>
    {
        IMapper CreateMap();
        TResultEntity MapEntity(TConvertEntity entity);
        IEnumerable<TResultEntity> MapEntity(IEnumerable<TConvertEntity> entities);
    }
}
