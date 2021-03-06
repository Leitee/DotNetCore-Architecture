﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Pandora.NetCore.Identity;
using Pandora.NetCore.Identity.Services;
using Pandora.NetCore.Identity.Services.Contracts;
using Pandora.NetStdLibrary.Base.Interfaces;
using Pandora.NetStdLibrary.Base.Mapper;
using Pandora.NetStdLibrary.Base.Security;
using Swashbuckle.AspNetCore.Swagger;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddDIServices(this IServiceCollection services)
        {
            services
            .AddScoped<ILogger, Logger<IdentityLOG>>()
            .AddSingleton<IMapperCore, GenericMapper>()
            .AddScoped<IAuthSvc, AuthSvc>()
            .AddScoped<ISocialSvc, SocialSvc>()
            .AddTransient<IJwtTokenProvider, JwtTokenProvider>();

            return services;
        }

        public static IServiceCollection AddOpenApi(this IServiceCollection services)
        {
            services.AddSwaggerGen(setup =>
            {
                setup.DescribeAllParametersInCamelCase();
                setup.DescribeStringEnumsInCamelCase();
                setup.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "SchoolMngr Identity",
                    Version = ApiVersion.Default.ToString()
                });
            });

            return services;
        }
    }
}
